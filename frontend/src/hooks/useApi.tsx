import axios from "axios";
import { SobreMim, Certificate, Response } from "../models/apiModels";
import {
  Key,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  Dispatch,
} from "react";

function useApi() {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiToken = process.env.REACT_APP_API_TOKEN;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCertificate = useCallback(
    async (
      endpoint: String,
      setStateComponent: Dispatch<SetStateAction<Certificate | undefined>>
    ) => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get<Response>(`${apiHost}/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        setStateComponent(res.data.data as Certificate);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    },
    [apiHost, apiToken]
  );

  const fetchImage = useCallback(
    async (
      imageUrl: string,
      setImageSrc: Dispatch<SetStateAction<string | undefined>>
    ) => {
      try {
        const response = await axios.get(`${apiHost}/${imageUrl}`, {
          responseType: "blob",
        });
        const imageBlob = response.data;
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageSrc(imageObjectURL);
      } catch (error) {
        console.error("Error fetching the image", error);
      }
    },
    []
  );

  const fetchSobreMim = useCallback(
    async (
      endpoint: String,
      setStateComponent: Dispatch<SetStateAction<SobreMim[] | undefined>>
    ) => {
      setLoading(true);
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
        setLoading(false);
      }
    },
    [apiHost, apiToken]
  );

  return { fetchCertificate, fetchImage, fetchSobreMim, loading, error };
}

export default useApi;
