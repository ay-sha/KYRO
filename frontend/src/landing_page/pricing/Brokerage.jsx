export default function Brokerage() {
    const accountOpeningCharges = [
        ["Account type", "Charge"],
        ["Online Account", "Free"],
        ["Offline Account", "Free"],
        ["Commodity Account", "৳150"],
        ["Combined Account", "৳300"],
        ["Demat Account", "৳100"],
        ["AMC (Annual Maintenance)", "৳250/year"],
    ];

    const valueAddedServices = [
        ["Service", "Charge"],
        ["SMS Alerts", "৳20/month"],
        ["Call & Trade", "৳50/call"],
        ["Research Reports", "Free"],
        ["Market Watch App", "৳100/month"],
        ["Priority Support", "৳300/year"],
    ];

    const renderTable = (data) => (
        <table className="w-full mt-4 text-left border border-neutral-300 mb-30">
            <thead>
                <tr className="bg-gray-100">
                    {data[0].map((heading, index) => (
                        <th key={index} className="px-4 py-2 font-medium">
                            {heading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-4 py-2 text-gray-800">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="w-full px-8 py-8">
            <div className="max-w-7xl mx-auto space-y-10">
                <h1 className="text-3xl font-semibold text-neutral-600 mb-2">
                    Charges for account opening
                </h1>
                {renderTable(accountOpeningCharges)}
            </div>

            <div className="max-w-7xl mx-auto space-y-10 mt-12">
                <h1 className="text-3xl font-semibold text-neutral-600 mb-2">
                    Charges for optional value-added services
                </h1>
                {renderTable(valueAddedServices)}
            </div>
        </div>
    );

}
