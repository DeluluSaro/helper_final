import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const AIResult=pgTable('aiResult',{
    id:serial('id').primaryKey(),
    formData:varchar('formdata'),
    result:varchar('result'),
    gibberish:varchar('gibberish'),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')

})