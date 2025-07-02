import DescriptionText from '../atoms/DescriptionText';
import TitleText from '../atoms/TitleText';

const HowItWorksSection = () => {
  return (
    <section style={{ padding: '80px 5vw',textAlign: 'center' }}>

      <TitleText level={3} style={{ fontSize: '1.8rem', textAlign: 'center' }}>
      Sistem Nasıl Çalışır?
      </TitleText>
      <DescriptionText>
        CV tarama süreci hızlı, kolay ve anlaşılırdır. CV'inizi analiz etmek için yalnızca üç adıma ihtiyacımız var.
      </DescriptionText>
    </section>
  );
};

export default HowItWorksSection;
