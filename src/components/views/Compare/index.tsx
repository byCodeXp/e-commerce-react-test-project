import { Header } from '../../layout/Header';

export function CompareView() {
    return (
        <div>
            <Header title="Compare" description="" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Option #1</th>
                                <th>Option #2</th>
                                <th>Option #3</th>
                                <th>Option #4</th>
                                <th>Option #5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(16)
                                .fill(0)
                                .map((_, index) => (
                                    <tr key={index}>
                                        <td>-----</td>
                                        <td>-----</td>
                                        <td>-----</td>
                                        <td>-----</td>
                                        <td>-----</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
