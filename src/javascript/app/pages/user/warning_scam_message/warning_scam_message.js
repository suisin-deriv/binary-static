const getElementById       = require('../../../../_common/common_functions').getElementById;
const BinarySocket         = require('../../../base/socket');
const Client               = require('../../../base/client');
const State                = require('../../../../_common/storage').State;

const WarningScamMessage = (()=>{
    let warning_scam_message, warning_scam_message_button, warning_scam_message_checkbox;

    const has_read_warning_scam_message = () => {
        BinarySocket.wait('authorize', 'website_status').then(()=> {
            const is_logged_in = !!Client.isLoggedIn();
            const is_brazil = State.getResponse('website_status.clients_country') === 'my';
            const is_message_read = localStorage.getItem('readScamMessage') || false;

            if (is_logged_in && is_brazil && !is_message_read) {
                warning_scam_message = getElementById('warning_scam_message');
                warning_scam_message_checkbox = getElementById('warning_scam_message_checkbox');
            }
            warning_scam_message.setVisibility(1);
            warning_scam_message_checkbox.addEventListener('change', acknowledgeMessage);
        });
    };
    
    const acknowledgeMessage = () => {
        warning_scam_message_button = getElementById('warning_scam_message_button');
        if (warning_scam_message_button.classList.contains('button-disabled')) {
            warning_scam_message_button.classList.remove('button-disabled');
        } else {
            warning_scam_message_button.classList.add('button-disabled');
        }
        
        warning_scam_message_button.addEventListener('click',closePopup);
    };

    const closePopup = () => {
        localStorage.setItem('readScamMessage', true);
        warning_scam_message.setVisibility(0);
    };

    return { has_read_warning_scam_message, acknowledgeMessage, closePopup };
})();

module.exports = WarningScamMessage;
