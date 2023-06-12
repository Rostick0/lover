export const monthsAll = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

export function getPeopleAcceptableYears() {
    const years = [];

    for (let i = 18; i <= 70; i++) {
        years.push({
            value: i,
            data: i,
        });
    }

    return years;
}

export function getAcceptableYears() {
    const years = [];

    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= currentYear - 70; i--) {
        years.push({
            value: i,
            data: i,
        });
    }

    return years;
}

export function getMonths() {
    return [...monthsAll].map(month => {
        return {
            value: month,
            data: month
        }
    });
}

export function getDays() {
    const days = [];

    for (let i = 1; i <= 31; i++) {
        days.push({
            value: i,
            data: i,
        })
    }

    return days;
}