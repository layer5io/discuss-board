import moment from "moment";

// Capitalize Text
export const capitalize = (str: string | any) => {
    return str?.replace(/\w\S*/g, (t: string) => {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
};

export const getTime = (val: string) => moment(val).format('hh:mm:ss a');

export const getDate = (val: string) => moment(val).format('DD/MM/YYYY');

export const getDateTime = (val: string) => `${getDate(val)} | ${getTime(val)}`;

export const formatPhone = (val: string) => `234${val.slice(-10)}`;
export const formatPhoneForSubAgent = (val: string) => val.split('-').length === 2 ? val.split('-')[1] : val.split('-')[0]