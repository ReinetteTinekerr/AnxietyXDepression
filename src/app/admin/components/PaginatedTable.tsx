import { IResponse } from "../IResponse"

interface PaginatedTableProps {
    responses: IResponse[]
}

export default function PaginatedTable({ responses }: PaginatedTableProps) {
    return <>
        <div className="">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left">Created At</th>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left">BDI</th>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left">BAI</th>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left">Comment</th>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 text-left">User</th>
                    </tr>
                </thead>
                <tbody>
                    {responses.map((item, index) => {
                        const date = item.createdAt.toDate();
                        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                        return (
                            <tr key={index}>
                                <td className="px-6 py-4 border-b border-gray-300">{formattedDate}</td>
                                <td className="px-6 py-4 border-b border-gray-300">{item.bdi}</td>
                                <td className="px-6 py-4 border-b border-gray-300">{item.bai}</td>
                                <td className="px-6 py-4 border-b border-gray-300">{item.bai}</td>
                                <td className="px-6 py-4 border-b border-gray-300">{item.comment}</td>
                                <td className="px-6 py-4 border-b border-gray-300">{item.user.username}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </>;
}