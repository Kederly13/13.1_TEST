const CurrentDate = () => {
    const currentDate = new Date();
    return {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1
    }
}

export default CurrentDate;