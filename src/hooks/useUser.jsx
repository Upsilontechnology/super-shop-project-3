import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useUser = () => {
    const axiosPublic = useAxiosPublic();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const res = await axiosPublic.get('/user')
            return res.data;
        }
    })
    return [users, refetch];
};

export default useUser;