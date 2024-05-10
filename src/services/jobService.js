
const JOB_SERVICE_API = process.env.REACT_APP_JOB_SERVICE_API;

export const searchJobSpecificationApi = async (searchQuery, pageNumber, isNewSearch) => {
    const path = JOB_SERVICE_API + `search/?query=${searchQuery}&pageNumber=${pageNumber}&fresh=${isNewSearch}`;
    const response = await fetch(path,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        });
    const result = await response.json();
    return result;
}