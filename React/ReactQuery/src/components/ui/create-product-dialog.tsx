import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createProductSchema = z.object({
    name: z.string(),
    price: z.coerce.number()
})

type CreateProductSchema = z.infer<typeof createProductSchema>

export const ProductDialog = () => {

    const handleClickOpen = () => {

    }

    const { register, handleSubmit } = useForm<CreateProductSchema>({
        resolver: zodResolver(createProductSchema)
    })

    const { mutateAsync: createProductFn } = useMutation({
        mutationFn: createProduct,
    })

    function handleCreateProduct(data: CreateProductSchema) {
        createProductFn()
    }

    return (<>
        
    </>)
}