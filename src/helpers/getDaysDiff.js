const getDaysDiff = (date) => {
    const day = new Date(date);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = new Date(mm + '/' + dd + '/' + yyyy);
    const timeDiff = today.getTime() - day.getTime();

    return timeDiff / (1000 * 3600 * 24)
}

export default getDaysDiff;