export function changeItem(item, array) {
    array = array.map(step => {
        if (item.item.id === step.id) {

            step = {
                ...step,
                id: step.id,
                name: item.item.name,
                image: item.item.image,
            }

            if (item.item.availability) {
                step = {
                    ...step,
                    availability: item.item.availability,
                    price: item.item.price,
                    date: step.date,
                    category: step.category
                }
            } else {
                step = {
                    ...step,
                    title: item.item.title
                }
            }
            return step
        } else {
            return step
        }
    })

    return array
}

export default null