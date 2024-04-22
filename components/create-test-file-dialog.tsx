import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Send } from 'lucide-react';
import TestFileForm from './test-file-form';
import InputCard from './input-card';
import FileUpdateForm from './file-update-form';

export function CreateTestFileDialog({
  file,
  opened,
  setOpened,
  prompt,
}: {
  file?: {
    id: string;
    version: string;
    code: string;
    file_path: string;
  };
  opened: boolean;
  setOpened: (opened: boolean) => void;
  prompt: string;
}) {
  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger asChild>
        <Button type="submit" variant="ghost" size="icon" disabled={!prompt}>
          <Send className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Test File Setup</DialogTitle>
          <DialogDescription>
            Create a test file that Genie will use to automatically run test
            cases on your CI/CD pipeline using GitHub Actions.
          </DialogDescription>
        </DialogHeader>
        {!!file?.id || (
          <InputCard title="Test Generation">
            <div className="text-sm border rounded p-2 md:p-4 bg-foreground/5">
              {prompt}
            </div>
          </InputCard>
        )}

        <TestFileForm prompt={prompt} close={() => setOpened(false)} />
      </DialogContent>
    </Dialog>
  );
}
