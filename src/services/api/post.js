export default async function get(path) {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}${path}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    return await response.json();
}