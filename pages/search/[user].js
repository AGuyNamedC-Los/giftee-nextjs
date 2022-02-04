import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const User = ({usernames}) => {
    const router = useRouter();
    console.log(usernames);
    return (
        <div>{router.query.user}</div>
    );
}

export const getServerSideProps = async (context) => {
    console.log("context");
    console.log(context.params.user);
    const usernames = await prisma.Users.findMany({
        select: {
            firstname: true
        }
    });

    return {
        props: {
            usernames
        }
    }
}

export default User;