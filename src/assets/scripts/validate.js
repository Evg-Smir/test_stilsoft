export function validate(data, param) {
    const errors = []

    if (!data.title.trim().length) {
        errors.push('title')
    }

    if (!data.url.trim().length) {
        errors.push('url')
    }

    if (param === 'items') {

        if (!data.price.trim().length) {
            errors.push('price')
        }

        if (!data.category.length) {
            errors.push('category')
        }
    }

    return errors
}

export default null