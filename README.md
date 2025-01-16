# Cinema Website

 a demo cinema website built using Next.js, and Supabase.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bilelBoulhia/cinema-website.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd cinema-website
   ```

3. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

4. **Set Up Supabase**:
   - Create a [Supabase](https://supabase.com/) account if you don't already have one.
   - Create a new project and configure the database according to the application's requirements.
   - Obtain your Supabase URL and API Key.
   - Add these to a `.env.local` file in the root of the project:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Supabase Account](https://supabase.com/)

## Deployment

To deploy the application, you can use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). set the environment variables in your settings.


