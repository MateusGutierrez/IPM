import Content from '@/components/content';
import banner from '@/assets/banner.jpeg'

const Home: React.FC = () => {
  return (
    <Content>
      <section>
      <div className='flex pt-6 gap-6'>
        <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-6">
          Impulsione a qualidade de vida das pessoas com uma <span className='text-primary'>gestão pública</span> mais eficiente e inteligente.
        </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Na IPM, temos o propósito de transformar o futuro de cidades e pessoas através da tecnologia e da inovação. 
            Somos incansáveis em nossa dedicação a deixar o mundo melhor do que o encontramos, e estamos apenas começando nossa jornada.
          </p>
        </div>
        <img src={banner} className='w-[40%] rounded-xl'/>
      </div>
      </section>
    </Content>
  );
};
export default Home;