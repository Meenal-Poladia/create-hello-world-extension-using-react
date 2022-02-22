import {useEffect, useState} from "react";

const Checkbox = ({type, name, labelText}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isBoxChecked, setIsBoxChecked] = useState(false);

    const changeTextColor = (document) => {
        console.log(document)
    }

    const searchActiveTab = () => {
        let queryOptions = { active: true, currentWindow: true };
        chrome.tabs.query(queryOptions, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { message: 'changeTextColor', isChecked: isBoxChecked}, {}, changeTextColor);
        });
    }

    useEffect( () => {
        chrome.storage.local.get(['isChecked'], (value) => {
            searchActiveTab()
            setIsBoxChecked(value.isChecked);
            setIsLoading(false);
        });
    }, [isBoxChecked])

    const handleChange = (e) => {
        const isCheckedValue = e.target.checked;
        chrome.storage.local.set( {'isChecked': isCheckedValue}, () => {
            setIsBoxChecked(isCheckedValue);
        })
    }

    return (
        <form>
            {
                !isLoading &&
                <input
                    type={type}
                    name={name}
                    id={name}
                    checked={isBoxChecked}
                    defaultValue={isBoxChecked}
                    onChange={(e) => handleChange(e)}
                />
            }
            <label htmlFor={name}>{labelText}</label>
        </form>
    )
}
export default Checkbox;