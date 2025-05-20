// Mock server actions for frontend-only development

/**
 * Mock function to simulate multimodal model requests
 */
export async function requestMultimodalModel({
  system,
  messages,
  returnType
}: {
  system: string;
  messages: { role: string; content: string }[];
  returnType: any;
}) {
  console.log("Mock multimodal model request:", { system, messages });
  
  // For avatar generation requests, return a placeholder image URL
  if (messages[0]?.content.includes("Generate a professional headshot avatar")) {
    // Extract the prompt part to determine which avatar to return
    const promptText = messages[0].content.toLowerCase();
    
    let imageUrl = "https://i.pravatar.cc/150";
    
    if (promptText.includes("woman")) {
      imageUrl = "https://i.pravatar.cc/150?img=5"; // Female avatar
    } else if (promptText.includes("man")) {
      imageUrl = "https://i.pravatar.cc/150?img=7"; // Male avatar
    } else if (promptText.includes("asian")) {
      imageUrl = "https://i.pravatar.cc/150?img=13"; // Asian avatar
    } else if (promptText.includes("curly")) {
      imageUrl = "https://i.pravatar.cc/150?img=9"; // Person with curly hair
    }
    
    return { imageUrl };
  }
  
  // Default mock response
  return { imageUrl: "https://i.pravatar.cc/150" };
} 