import Content from '@/components/content';
import { Button } from '@/components/ui/button';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const Dashboard: React.FC = () => {
  const { get_listed_users } = useContext(Context);

  useEffect(() => {
    const fetchUsers = async () => {
      await toast.promise(
        get_listed_users(), // Chama a função assíncrona que retorna uma Promise
        {
          pending: 'Carregando usuários...',
          success: 'Usuários carregados com sucesso!',
          error: 'Erro ao carregar usuários.'
        }
      );
    };

    fetchUsers();
  }, [get_listed_users]);

  return (
    <Content>
      <section>
        <h1>Dashboard</h1>
        <Button>Dashboard</Button>
      </section>
    </Content>
  );
};

export default Dashboard;
