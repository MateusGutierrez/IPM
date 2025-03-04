import Content from '@/components/content';
import FormComponent from '@/components/form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Forms: React.FC = () => {
  return (
    <Content className='flex justify-center pt-6'>
      <Card className="min-w-[350px] w-[50%]">
      <CardHeader>
        <CardTitle>Envie sua  mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <FormComponent/>
      </CardContent>
    </Card>
    </Content>
  );
};
export default Forms;