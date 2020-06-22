const itemConverter = (items) => {

    let data = items.map(item => {
        return {
            id: item.objectID,
            image: item.image,
            text: item.name,
            categories: item.categories,
            value: item.price
        }
    })


    return [{header: 'Search Results'}, ...data];

}

export default itemConverter;