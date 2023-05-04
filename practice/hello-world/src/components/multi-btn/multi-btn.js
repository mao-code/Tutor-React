function multiBtn()
{
    var output = [];
    for(let i=0; i<5; i++)
    {
        output.push(<button>這是第個{i+1}按鈕</button>);
    }

    return output;
}

function Btns()
{
    return (
        <div>
            { multiBtn() }
        </div>
    );
}

export default Btns;