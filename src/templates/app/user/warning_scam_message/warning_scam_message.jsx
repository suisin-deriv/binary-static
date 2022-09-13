import React from 'react';

const WarningScamMessage = () => (
    <React.Fragment>
        <div id='warning_scam_message' className='lightbox invisible'>
            <div id='warning_scam_message_content'>
                <h1>{it.L('Beware of the fake links.')}</h1>
                <p>{it.L('A link can contain the word "Binary" and still be fake.')}</p>
                <h2 id='warning_scam_message_title_secondary'>{it.L('Do not get lured to fake "Binary" pages!')}</h2>
                <p id='warning_scam_message_text_secondary'>{it.L('You may see links to websites with a fake Binary login page where you’ll get scammed for your money. ')}</p>
                <div className='warning-scam-message-content-info-message'>
                    <h3 id='warning_scam_message_scam_title_text'>{it.L('Do not trust and give away your credentials on fake websites, ads or emails.')}</h3>
                </div>
                <div className='warning-scam-message-correct-content'>
                    <div className='warning-scam-message-content-info-message'>
                        <h3 id='warning_scam_message_scam_title_text'>
                            {it.L('Only log in to your account at this secure link, never elsewhere.')}
                        </h3>
                    </div>
                    <div className='warning-scam-message-link-container'>
                        <p id='warning_scam_message_link'>https://binary.com</p>
                    </div>
                </div>
                <div className='warning-scam-message-wrong-content'>
                    <div className='warning-scam-message-content-info-message'>
                        <h3 id='warning_scam_message_scam_title_text'>
                            {it.L('Fake links often contain the word that looks like "Binary" but look out for these differences.')}
                        </h3>
                    </div>
                    <div className='warning-scam-message-link-container'>
                        <p id='warning_scam_message_link'>{it.L('Examples')}: https://binakyos.me</p>
                    </div>
                </div>
                <div className='warning-scam-message-checkbox-container'>
                    <input type='checkbox' id='warning_scam_message_checkbox' />
                    <label htmlFor='warning_scam_message_checkbox'>{it.L('I\'ve read the above carefully.')}</label>
                </div>
                <div className='warning-scam-message-button-icon-container'>
                    <button id='warning_scam_message_button' className='button-disabled'>{it.L('OK, got it')}</button>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default WarningScamMessage;
