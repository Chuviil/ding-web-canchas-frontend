import CourtsTable from "@/app/dashboard/courts/courts-table";
import {getCourts} from "@/app/dashboard/courts/courts.api";
import Link from "next/link";

const CourtsPage = async () => {
    const courts = await getCourts();

    return (
        <main>
            <div className={"flex justify-between p-4"}>
                <h1 className={"text-2xl font-bold"}>Canchas</h1>
                <Link href={"/dashboard/courts/new"} className={"bg-gray-900 text-white rounded px-4 py-2"}>
                    Crear cancha
                </Link>
            </div>
            <div className={"p-4"}>
                <CourtsTable data={courts}/>
            </div>
        </main>
    );
};

export default CourtsPage;