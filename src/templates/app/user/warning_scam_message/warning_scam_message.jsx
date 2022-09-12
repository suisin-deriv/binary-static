import React from 'react';

const WarningScamMessage = () => (
    <React.Fragment>
        <div id='warning_scam_message'>
            <h1>{it.L('Beware of the fake links.')}</h1>
            <p>{it.L('A link can contain the word "Binary" and still be fake.')}</p>
            <h2 id='warning_scam_message_title_secondary'>{it.L('Do not get lured to fake "Binary" pages!')}</h2>
            <p id='warning_scam_message_text_secondary'>{it.L('You may see links to websites with a fake Binary login page where you’ll get scammed for your money. ')}</p>
            <div className='warning-scam-message--content__info--message'>
                <h3 id='warning_scam_message_scam_title_text'>{it.L('Do not trust and give away your credentials on fake websites, ads or emails.')}</h3>
            </div>
            <div className='warning_scam_message_correct_content'>
                <div className='warning-scam-message--content__info--message'>
                    <h3 id='warning_scam_message_scam_title_text'>
                        {it.L('Only log in to your account at this secure link, never elsewhere.')}
                    </h3>
                </div>
                <div className='warning_scam_message_link_container'>
                    <p id='warning-scam-message-link'>https://binary.com</p>
                </div>
            </div>
            <div className='warning_scam_message_wrong_content'>
                <div className='warning-scam-message--content__info--message'>
                    <h3 id='warning_scam_message_scam_title_text'>
                        {it.L('Fake links often contain the word that looks like "Binary" but look out for these differences.')}
                    </h3>
                </div>
                <div className='warning_scam_message_link_container'>
                    <p id='warning-scam-message-link'>{it.L('Examples')}: https://binakyos.me</p>
                </div>
            </div>
            <div className='warning_scam_message_checkbox_container'>
                <input type='checkbox' id='warning-scam-message-checkbox' />
                <p>{it.L('I\'ve read the above carefully.')}</p>
            </div>
        </div>
    </React.Fragment>
);

export default WarningScamMessage;
