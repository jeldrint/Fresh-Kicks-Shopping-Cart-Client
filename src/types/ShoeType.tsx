

export type Shoe = {
    id: number,
    name_id?: string,
    name: string,
    brand: string,
    price: number,
    discount?: number,
    rating?: number,
    img_URL: string,
    createdAt: string,
    updatedAt: string,
    category: Shoe_Category,
}

type Shoe_Category = {
    id: number,
    new_arrival: boolean,
    hot_item: boolean,
    men: boolean,
    women: boolean,
    kids: boolean,
    shoeId: number,
    menShoeSize?: Men_Shoe_Size,
    womenShoeSize?: Women_Shoe_Size,
    kidsShoeSize?: Kids_Shoe_Size
}

type Men_Shoe_Size = {
    id: number,
    eur_39: boolean,
    eur_40: boolean,
    eur_41: boolean,
    eur_42: boolean,
    eur_43: boolean,
    eur_44: boolean,
    eur_45: boolean,
    eur_46: boolean,
    eur_47: boolean,
    eur_48: boolean,
    eur_49: boolean,
    categoryId: number
}

type Women_Shoe_Size = {
    id: number,
    eur_33: boolean,
    eur_34: boolean,
    eur_35: boolean,
    eur_36: boolean,
    eur_37: boolean,
    eur_38: boolean,
    eur_39: boolean,
    eur_40: boolean,
    eur_41: boolean,
    categoryId: number
}

type Kids_Shoe_Size = {
    id: number,
    eur_30: boolean,
    eur_31: boolean,
    eur_32: boolean,
    eur_33: boolean,
    eur_34: boolean,
    eur_35: boolean,
    eur_36: boolean,
    eur_37: boolean,
    eur_38: boolean,
    categoryId: number
}