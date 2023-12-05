import { Button } from '@/components/common';
import { IconPlus } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';

function App() {
  return (
    <div>
      <Button
        size="sm"
        variant="filled"
        color="beige"
        leftSection={<IconPlus />}
        rightSection={<IconArrowRight />}
      />
    </div>
  );
}

export default App;
