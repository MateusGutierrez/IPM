import Content from '@/components/content';
import ChartComponent from '@/components/chart';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import UserCard from '@/components/userCard';
import { Context } from '@/provider';
import useUserStore from '@/zustand/userStore';
import { isEmpty } from 'lodash';
import { Loader2 } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useStore } from 'zustand';

const Dashboard: React.FC = () => {
  const { get_listed_users } = useContext(Context);
  const { users } = useStore(useUserStore);
  useEffect(() => {
    const fetchUsers = async () => {
      await toast.promise(get_listed_users(), {
        pending: 'Carregando usuários...',
        success: 'Usuários carregados com sucesso!',
        error: 'Erro ao carregar usuários.'
      });
    };
    if (isEmpty(users)) fetchUsers();
  }, []);

  return (
    <Content>
      <section>
        <section>
          {isEmpty(users) ? (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Loader2 className="animate-spin text-primary" size={20} />
                  Carregando usuários...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label>
                  A API está rodando em uma instância gratuita, o que pode
                  causar lentidão na primeira requisição. Isso pode levar alguns
                  minutos.
                </Label>
              </CardContent>
              <CardFooter>
                <Label>
                  Se necessário, tente recarregar a página ou acesse a api:{' '}
                  <a
                    href="https://ipm-jsc4.onrender.com/"
                    target="_blank"
                    className="text-primary"
                  >
                    https://ipm-jsc4.onrender.com/
                  </a>
                </Label>
              </CardFooter>
            </Card>
          ) : (
            <section>
              <div className="flex justify-center items-center py-8 m-auto min-w-[150px] max-w-[500px]">
                <ChartComponent users={users} />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {users.map((user, index) => (
                  <UserCard
                    key={index}
                    state={user.location.state}
                    cell={user.cell}
                    city={user.location.city}
                    country={user.location.country}
                    nat={user.nat}
                    email={user.email}
                    gender={user.gender}
                    name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                    phone={user.phone}
                    picture={user.picture.thumbnail}
                  />
                ))}
              </div>
            </section>
          )}
        </section>
      </section>
    </Content>
  );
};

export default Dashboard;
