import Content from '@/components/content';
import FormComponent from '@/components/form';
// import { DataTableDemo } from '@/components/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Forms: React.FC = () => {
  return (
    <Content className="flex justify-between pt-6 gap-6">
      <Card className="min-w-[350px] w-[30%] h-fit">
        <CardHeader>
          <CardTitle>Envie sua mensagem</CardTitle>
        </CardHeader>
        <CardContent>
          <FormComponent />
        </CardContent>
      </Card>
      {/* <DataTableDemo /> */}
    </Content>
  );
};
export default Forms;
