// Simple toast utility for notifications
// In a real application, you might use a library like react-toastify or a more sophisticated implementation

interface ToastOptions {
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
  duration?: number;
}

// Mock toast function
const toast = (options: ToastOptions) => {
  // In a real implementation, this would show a toast notification
  console.log(`Toast (${options.variant || 'default'}): ${options.title} - ${options.description}`);
  
  // This is just a mock - in a real app you'd return the toast instance or controls
  return {
    id: Date.now(),
    dismiss: () => console.log('Toast dismissed')
  };
};

// Hook to use toast
export const useToast = () => {
  return { toast };
}; 