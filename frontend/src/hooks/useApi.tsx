import axios from "axios";
import { SobreMim, CertificateModel, Response } from "../models/apiModels";
import {
  Key,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  Dispatch,
  useContext,
  useMemo,
} from "react";
import { LoadingContext } from "../context/Loading";

function useApi() {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiToken = process.env.REACT_APP_API_TOKEN;

  const { setIsLoading, isLoading } = useContext(LoadingContext);
  const [error, setError] = useState<Error | null>(null);

  const fetchCertificate = useCallback(
    async (
      certificate_ids: number[],
      setStateComponent: Dispatch<
        SetStateAction<CertificateModel[] | undefined>
      >
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        for (const id of certificate_ids) {
          const resCertificateDetails = await axios.get<Response>(
            `${apiHost}/certificates/${id}`,
            {
              headers: {
                Authorization: `Bearer ${apiToken}`,
              },
            }
          );

          const response = await axios.get(
            `${apiHost}/certificates/images/${id}`,
            {
              responseType: "blob",
            }
          );
          const imageBlob = response.data;
          const imageObjectURL = URL.createObjectURL(imageBlob);

          const certificate: CertificateModel = {
            ...(resCertificateDetails.data.data as CertificateModel),
            image: imageObjectURL,
          };

          setStateComponent((prevCertificates) => {
            // Initialize prevCertificates if it's not already a Set
            const currentCertificates = prevCertificates || [];
          
            // Add the new certificate only if it's not already present
            if (!currentCertificates.some((el,idx) => el.id === certificate.id)) {
              return [...currentCertificates, certificate];
            }
          
            // If the certificate is already present, return the current set
            return currentCertificates;
          });
          
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const fetchIntroduction = useCallback(
    async (
      endpoint: String,
      setStateComponent: Dispatch<SetStateAction<SobreMim[] | undefined>>
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await axios.get<Response>(`${apiHost}/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        setStateComponent(res.data.data as SobreMim[]);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [apiHost, apiToken]
  );

  return { fetchCertificate, fetchIntroduction, error };
}

export default useApi;
