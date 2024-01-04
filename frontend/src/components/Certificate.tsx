import React, { useEffect, useState } from 'react' 
import Card from './Card'
import useApi from '../hooks/useApi'
import { Certificate, SobreMim } from '../models/apiModels'

interface Props {
  certificate_id : Number
}

const Certificate = (props: Props) => {
  const [certificateData, setCertificateData] = useState<Certificate>()
  const [imageSrc, setImageSrc] = useState<string>()

  const {fetchCertificate, fetchImage} = useApi()

  useEffect(() => {
    fetchCertificate(`/certificates/${props.certificate_id}`, setCertificateData)
    fetchImage(`/certificates/images/${props.certificate_id}`, setImageSrc)
  }, [])

  if (!certificateData || !imageSrc) return <p>Nenhum certificado</p>

  return (<Card key={certificateData.id} title={certificateData.title} alt='akt' src={imageSrc}><p>{certificateData.description}</p></Card>)
}

export default Certificate