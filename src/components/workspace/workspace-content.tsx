"use client";
import OnboardingSteps from "./onboarding";
import TextEditor from "./text-editor";
import PdfViewer from "./pdf-viewer";

interface WorkspaceContentProps {
  fileId: string;
}

const WorkspaceContent = ({ fileId }: WorkspaceContentProps) => {
  return (
    <>
      <OnboardingSteps />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <TextEditor />
        </div>
        <div>
          <PdfViewer fileId={fileId} />
        </div>
      </div>
    </>
  );
};

export default WorkspaceContent;