import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .active{
        opacity: 1;
    }

    button {
        border: none;
        background: none;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

    span {
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 95%;
        bottom: 30px
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        border: 1px solid #EE6B26;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;

        input {
            width: 20px;
            height: 20px;
        }

        span {
            cursor: pointer;
            &:hover {
                opacity: 0.5;
            }
        }
    }

    button {
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button {
        width: 100%;
        background: #EE6B26;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`