import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import type { ApiUser } from '../types';
import { compareParsedNames, formatParsedName, parseName } from '../utils/UsersNameFormat';

export interface UserAutoCompleteProps{
    users: ApiUser[];
    loading?: boolean;
    error?: string | null;
    onSelect?: (user: ApiUser | null) => void;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
}

function UserAutoComplete({users,error = null, onSelect,disabled,label = 'Search users', placeholder= 'Start typing a name...'}: UserAutoCompleteProps) {
    const options = () => {
    const mapped = users.map((u) => {
        const parsed = parseName(u.name);
        const label = formatParsedName(parsed);
        return { user: u, parsed, label };
    });
    mapped.sort((a, b) => compareParsedNames(a.parsed, b.parsed));
    return mapped;
    };

    return (
        <div>
            <Autocomplete
                disablePortal
                options={options()}
                sx={{ width: 400 }}
                onChange={(_evt, value) => {
                    onSelect?.(value ? value.user : null);
                }}
                disabled={disabled || (!!error && users.length === 0)}
                renderInput={(params) => (
                    <TextField {...params} label={label} placeholder={placeholder} error={!!error}
                    />
                )}
            />
        </div>
    )
}

export default UserAutoComplete
