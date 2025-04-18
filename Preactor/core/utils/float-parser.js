const { float2: f2, float3: f3, float4: f4 } = CS.Unity.Mathematics.math;
export function parseFloat2(input) {
  if (!input) return f2(0, 0);
  if (Array.isArray(input)) input = f2(input[0] ?? 0, input[1] ?? 0);
  return f2(input.x ?? 0, input.y ?? 0);
}
export function parseFloat3(input) {
  if (!input) return f3(0, 0, 0);
  if (Array.isArray(input)) input = f3(input[0] ?? 0, input[1] ?? 0, input[2] ?? 0);
  return f3(input.x ?? 0, input.y ?? 0, input.z ?? 0);
}
export function parseFloat4(input) {
  if (!input) return f4(0, 0, 0, 0);
  if (Array.isArray(input)) input = f4(input[0] ?? 0, input[1] ?? 0, input[2] ?? 0, input[3] ?? 0);
  return f4(input.x ?? 0, input.y ?? 0, input.z ?? 0, input.w ?? 0);
}
