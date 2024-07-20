import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const AIResult=pgTable('aiResult',{
    id:serial('id').primaryKey(),
    formData:varchar('formdata').notNull(),
    result:varchar('result'),
    gibberish:varchar('gibberish').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull()

})