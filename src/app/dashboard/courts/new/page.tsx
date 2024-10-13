import CourtForm from "./court-form";
import {getCourt} from "@/app/dashboard/courts/courts.api";

interface Props {
    params: {
        id: string
    }
}

const Page = async ({params}: Props) => {
    const court = params.id ? await getCourt(params.id) : {};

    return (
        <main className={'h-screen flex mx-auto items-center'}>
            <CourtForm court={court}/>
        </main>
    );
};

export default Page;