const DOM = React.DOM;
const phones = [
    { name: 'Василий Петрович',   phone: '+7 999 887 85 84'},
    { name: 'Наталья Дмитриевна', phone: '+7 999 887 85 85' },
    { name: 'Богдан Тихомиров',   phone: '+7 999 225 84 89' },
    { name: 'Елена Валерьевна',   phone: '+7 999 887 32 12' },
    { name: 'Тимур Максимович',   phone: '+7 999 455 23 32' },
    { name: 'Руслан Геннадьевич', phone: '+7 999 334 28 90' },
    { name: 'Павел Филлимонович', phone: '+7 999 005 15 14' },
];

class PhonesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phones };
    }
    render() {
        const { phones } = this.state;
        return React.createElement(PhonesList, { phones });
    }
}

const PhonesList = ({ phones }) => (
    DOM.ul(
        null,
        _.map(
            phones,
            (phone, key) => (
                DOM.li({ key }, `${phone.phone} ${phone.name}`)
            )
        )
    )
);

ReactDOM.render(
    React.createElement(PhonesContainer),
    document.getElementById('app1')
);

const Segment = (props) => (
    DOM.div(
        {
            style: {
                border: '1px solid red'
            }
        }
        , props.children
    )
);

const Hello = ({ name }) => (
    React.createElement(
        Segment,
        {}
        , DOM.div(null, `Hello, ${name}!`)
    )
);

ReactDOM.render(
    React.createElement(Hello, { name: 'Thinknetica' }),
    document.getElementById('app2')
);