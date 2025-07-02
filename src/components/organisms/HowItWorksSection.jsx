import DescriptionText from '../atoms/DescriptionText';
import TitleText from '../atoms/TitleText';
import StepCard from '../molecules/StepCard';
import { Row, Col } from 'antd';

const steps = [
  { number: '1', title: 'CV Şablonu İndir', description: 'Sitemizde hazırlanmış olan CV şablonunu indirin.' },
  { number: '2', title: "CV'yi Yükle", description: "Doldurmuş olduğunuz CV'yi sisteme yükleyin." },
  { number: '3', title: 'Anında Analiz', description: "CV'niz analiz edilir ve değerlendirilir." },
];

const HowItWorksSection = () => {
  return (
    <section style={{ padding: '10px',textAlign: 'center' }}>

      <TitleText level={3} style={{ fontSize: '1.8rem', textAlign: 'center' }}>
      Sistem Nasıl Çalışır?
      </TitleText>

      <DescriptionText>
        CV tarama süreci hızlı, kolay ve anlaşılırdır. CV'inizi analiz etmek için yalnızca üç adıma ihtiyacımız var.
      </DescriptionText>

      <Row gutter={[32, 32]} justify="center" style={{ marginTop: 40 }}>
      {steps.map((step, index) => (
      <Col xs={24} sm={12} md={8} key={index}>
      <StepCard {...step} />
      </Col>
     ))}
      </Row>

    </section>
  );
};

export default HowItWorksSection;
