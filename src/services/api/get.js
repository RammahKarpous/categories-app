export default async function get(path) {
    const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${path}`, {
            method: 'GET',
        });

    return await response.json();
}