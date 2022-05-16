import React from "react"

export const Today = () => {
    const currentDate = new Date()
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate()
    let day
    
    if (currentDate.getDay() === 1) {
        day = "월"
    } else if (currentDate.getDay() === 2) {
        day = "화"
    } else if (currentDate.getDay() === 3) {
        day = "수"
    } else if (currentDate.getDay() === 4) {
        day = "목"
    } else if (currentDate.getDay() === 5) {
        day = "금"
    } else if (currentDate.getDay() === 6) {
        day = "토"
    } else {
        day ="일"
    }

    const today = `${month}월 ${date}일 (${day})`

    return today
}