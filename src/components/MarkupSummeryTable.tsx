

interface IProps {
  summary: {
    Task: {
     totalActive: number,
     totalArchived: number,
   },
   'Random Thought': {
     totalActive: number,
     totalArchived: number,
   },
   Idea: {
     totalActive: number,
     totalArchived: number,
   },
    }
}

const MarkupSummeryTable = ({ summary }: IProps) => {
  return (
    <>
      <tr>
        <td>Task</td>
        <td>{summary.Task.totalActive}</td>
        <td>{summary.Task.totalArchived}</td>
      </tr>
      <tr>
        <td>Random Thought</td>
        <td>{summary['Random Thought'].totalActive}</td>
        <td>{summary['Random Thought'].totalArchived}</td>
      </tr>
      <tr>
        <td>Idea</td>
        <td>{summary.Idea.totalActive}</td>
        <td>{summary.Idea.totalArchived}</td>
      </tr>
    </>
  );
};

export default MarkupSummeryTable;
