"use client";

import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {createCourt, updateCourt} from "../courts.api";
import {useParams, useRouter} from "next/navigation";

interface CourtFormValues {
    name: string;
    sport_type: string[];
}

interface Props {
    court?: CourtFormValues;
}

const sportTypes = ['football', 'basketball', 'volleyball'] as const;

const CourtForm: React.FC = ({court}: Props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<CourtFormValues>({
        defaultValues: {
            name: court?.name,
            sport_type: court?.sport_type,
        }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const params = useParams();

    const onSubmit: SubmitHandler<CourtFormValues> = async (data) => {
        setIsSubmitting(true);

        try {
            if (params.id) {
                await updateCourt(params.id, data.name, data.sport_type);
            } else {
                await createCourt(data.name, data.sport_type);
            }
            router.push('/dashboard/courts');
            reset();
            router.refresh();
        } catch (e) {
            alert('There was an error creating the court.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 md:w-1/4 mx-auto p-10 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de la Cancha</label>
                <input
                    id="name"
                    type="text"
                    {...register("name", {required: "El nombre de la cancha es necesario"})}
                    className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="sport_type" className="block text-sm font-medium text-gray-700">Tipos de Deporte</label>
                <div className="mt-1">
                    {sportTypes.map((type) => (
                        <div key={type} className="flex items-center">
                            <input
                                type="checkbox"
                                id={type}
                                value={type}
                                {...register("sport_type", {required: "At least one sport type is required"})}
                                className="mr-2"
                            />
                            <label htmlFor={type} className="text-gray-700">{type}</label>
                        </div>
                    ))}
                </div>
                {errors.sport_type && <p className="text-red-500 text-sm mt-1">{errors.sport_type.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 ${isSubmitting && 'bg-opacity-50 cursor-not-allowed'}`}
            >
                {params.id ? 'Actualizar Producto': 'Crear Producto'}
            </button>
        </form>
    );
};

export default CourtForm;
