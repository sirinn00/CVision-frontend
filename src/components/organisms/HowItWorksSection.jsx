import DescriptionText from '../atoms/DescriptionText';
import TitleText from '../atoms/TitleText';
import StepCard from '../molecules/StepCard';
import { Row, Col } from 'antd';

const HowItWorksSection = () => {
  return (
    <section style={{ padding: '80px 5vw',textAlign: 'center' }}>

      <TitleText level={3} style={{ fontSize: '1.8rem', textAlign: 'center' }}>
      Sistem Nasıl Çalışır?
      </TitleText>
      <DescriptionText>
        CV tarama süreci hızlı, kolay ve anlaşılırdır. CV'inizi analiz etmek için yalnızca üç adıma ihtiyacımız var.
      </DescriptionText>
            <Row gutter={[32, 32]} justify="center" style={{ marginTop: 40 }}>
        <Col xs={24} sm={12} md={8}>
          <StepCard
            number="1"
            title="CV Şablonu İndir"
            description="Sitemizde hazırlanmış olan CV şablonunu indirin."
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <StepCard
            number="2"
            title="CV'yi Yükle"
            description="Doldurmuş olduğunuz CV'yi sisteme yükleyin."
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <StepCard
            number="3"
            title="Anında Analiz"
            description="CV'niz analiz edilir ve değerlendirilir."
          />
        </Col>
      </Row>
    </section>
  );
};

export default HowItWorksSection;
