let role = 'Guest';

switch (role) {
    case 'guest' :
        console.log('Guest User');
        break;

    case 'moderator' :
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

            //OR
if(role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');            
else console.log('Unknown User');