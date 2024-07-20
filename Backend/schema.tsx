import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const AIResult=pgTable('aiResult',{
    id:serial('id').primaryKey(),
    formData:varchar('formdata'),
    result:varchar('result'),
    gibberish:varchar('gibberish'),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')

})

export const UserSubscription=pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('username'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinData:varchar('joinDate')
})