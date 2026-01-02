import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async () => {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return new Response(JSON.stringify(leads), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch leads' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { fullName, phone } = body;

        if (!fullName || !phone) {
            return new Response(JSON.stringify({ error: 'Name and phone are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const lead = await prisma.lead.create({
            data: {
                fullName,
                phone,
            },
        });

        return new Response(JSON.stringify(lead), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create lead' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
