const STORAGE_KEY = 'svarnara-submissions'

export async function submitLead(type, payload) {
  const endpoint = import.meta.env.VITE_FORMS_ENDPOINT
  const submission = {
    id: `${type}-${Date.now()}`,
    type,
    payload,
    createdAt: new Date().toISOString(),
  }

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission),
    })

    if (!response.ok) {
      throw new Error('Unable to submit the form right now.')
    }

    return { mode: 'endpoint', submission }
  }

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  localStorage.setItem(STORAGE_KEY, JSON.stringify([submission, ...saved].slice(0, 50)))
  return { mode: 'local', submission }
}

