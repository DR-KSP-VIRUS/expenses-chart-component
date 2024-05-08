export const fetchData = async () => {
    try {
        const res = await fetch("../../data.json");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}